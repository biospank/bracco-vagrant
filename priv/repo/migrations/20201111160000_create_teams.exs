defmodule BraccoPubSub.Repo.Migrations.CreateTeams do
  use Ecto.Migration

  def change do
    create table(:teams, primary_key: true) do      
      add :title, :string, null: false
      add(:description, :text)
      add(:company_id, references(:companies))
      add(:created_by, references(:accounts))
      add(:created_at, :timestamp, default: fragment("now()"))
    end
    
    create index(:teams, [:company_id])
    create index(:teams, [:created_at])
    create index(:teams, [:created_by])
  end
end 