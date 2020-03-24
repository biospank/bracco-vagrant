defmodule BraccoPubSub.Repo.Migrations.AlterTicketStatus do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      modify(:status, :integer, default: 5)
    end
  end
end
