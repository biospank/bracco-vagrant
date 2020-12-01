defmodule BraccoPubSub.Repo.Migrations.CreateAddressbookAccountsRelationship do
  use Ecto.Migration

  def change do
    create table(:addressbook_accounts, primary_key: true) do      
      add(:address_id, references(:addressbook))
      add(:account_id, references(:accounts))
    end
    
    create index(:addressbook_accounts, [:address_id, :account_id])
  end
end