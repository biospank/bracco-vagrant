defmodule BraccoPubSub.Repo.Migrations.AddUpdatedAtNotes do
  use Ecto.Migration

  def change do
    alter table(:notes) do
      add(:updated_at, :timestamp, default: fragment("now()"))
    end
  end
end
