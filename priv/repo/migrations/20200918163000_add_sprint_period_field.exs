defmodule BraccoPubSub.Repo.Migrations.AddSprintPeriodField do
  use Ecto.Migration

  def change do
    alter table(:sprint) do
      add(:period, integer)      
    end
  end
end
