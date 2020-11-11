defmodule BraccoPubSub.Repo.Migrations.AddTeamsStatusField do
  use Ecto.Migration

  def change do
    alter table(:teams) do
      add(:status, :integer, default: 1)
      add(:selected, :boolean, default: false)  
    end
  end
end
