defmodule BraccoPubSub.Repo.Migrations.TriggerSetup do
  use Ecto.Migration

  def change do
    execute """
      DROP TRIGGER tickets_changed ON tickets;
    """

    execute """
      CREATE TRIGGER tickets_changed
      AFTER INSERT OR DELETE
      ON tickets
      FOR EACH ROW
      EXECUTE PROCEDURE notify_ticket_changes();
    """

    execute """
      CREATE TRIGGER tickets_updated
      AFTER UPDATE
      ON tickets
      FOR EACH ROW
      WHEN (OLD.updated_at IS DISTINCT FROM NEW.updated_at)
      EXECUTE PROCEDURE notify_ticket_changes();
    """

    execute """
      DROP TRIGGER comments_changed ON comments;
      DROP FUNCTION notify_comment_changes();
    """
  end
end
