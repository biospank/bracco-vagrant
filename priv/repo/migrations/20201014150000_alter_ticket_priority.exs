defmodule BraccoPubSub.Repo.Migrations.AlterTicketPriority do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      modify(:priority, :integer)
    end
  end
end
