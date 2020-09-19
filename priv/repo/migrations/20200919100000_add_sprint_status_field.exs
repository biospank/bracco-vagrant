defmodule BraccoPubSub.Repo.Migrations.AddSprintPeriodField do
  use Ecto.Migration

  def change do
    alter table(:sprint) do
      add(:status, :integer, default: 0)      
    end
  end
end
