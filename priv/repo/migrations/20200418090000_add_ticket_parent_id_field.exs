defmodule BraccoPubSub.Repo.Migrations.AddTicketParentIdField do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:parent_id, :integer)
    end
  end
end
