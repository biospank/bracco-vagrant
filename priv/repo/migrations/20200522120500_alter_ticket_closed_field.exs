defmodule BraccoPubSub.Repo.Migrations.AlterTicketClosedField do
  use Ecto.Migration

  def change do
    rename table(:tickets), :closed, to: :closed_at    
  end
end