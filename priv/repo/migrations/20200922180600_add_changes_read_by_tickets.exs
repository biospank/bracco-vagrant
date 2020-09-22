defmodule BraccoPubSub.Repo.Migrations.AddChangesReadbyTickets do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:changes_read_by, {:array, :integer}, default: [])
    end
  end
end
