defmodule BraccoPubSub.Repo.Migrations.AlterTicketPriority do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      remove :priority
      add(:priority, :integer)
    end
  end
end
