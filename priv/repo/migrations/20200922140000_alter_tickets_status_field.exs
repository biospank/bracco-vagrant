defmodule BraccoPubSub.Repo.Migrations.AlterTicketsStatusField do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      modify(:status, :integer, default: 0)
    end  
  end
end