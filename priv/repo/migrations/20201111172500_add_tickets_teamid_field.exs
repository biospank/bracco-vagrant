defmodule BraccoPubSub.Repo.Migrations.AddTicketsTeamidField do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:team_id, references(:teams))  
    end

    create index(:tickets, [:team_id])
  end
end
