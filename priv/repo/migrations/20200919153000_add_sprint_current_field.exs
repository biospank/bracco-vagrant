defmodule BraccoPubSub.Repo.Migrations.AddSprintCurrentField do
  use Ecto.Migration

  def change do
    alter table(:sprint) do
      add(:current, :boolean, default: true)      
    end
  end
end
