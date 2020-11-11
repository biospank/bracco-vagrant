defmodule BraccoPubSub.Repo.Migrations.CreateTeamsAccountsRelationship do
  use Ecto.Migration

  def change do
    create table(:teams_accounts, primary_key: true) do      
      add(:team_id, references(:teams))
      add(:account_id, references(:accounts))
    end
    
    create index(:team_account_idx, [:team_id, :account_id])
  end
end