defmodule BraccoPubSub.Repo.Migrations.TriggerSetup do
  use Ecto.Migration

  def change do
    execute """
      CREATE OR REPLACE FUNCTION notify_comment_changes()
      RETURNS trigger AS $$
      BEGIN
        IF (TG_OP = 'DELETE') THEN
          PERFORM pg_notify(
            'comments_changed',
            json_build_object(
              'operation', TG_OP,
              'table', 'comments',
              'record', row_to_json(OLD)
            )::text
          );
          RETURN OLD;
        ELSE
          PERFORM pg_notify(
            'comments_changed',
            json_build_object(
              'operation', TG_OP,
              'table', 'comments',
              'record', row_to_json(NEW)
            )::text
          );
          RETURN NEW;
        END IF;

        RETURN NULL;

      END;
      $$ LANGUAGE plpgsql;
    """

    execute """
      CREATE TRIGGER comments_changed
      AFTER INSERT OR UPDATE OR DELETE
      ON comments
      FOR EACH ROW
      EXECUTE PROCEDURE notify_comment_changes();
    """
  end
end
