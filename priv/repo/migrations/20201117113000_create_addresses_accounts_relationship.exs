defmodule BraccoPubSub.Repo.Migrations.CreateAddressesAccountsRelationship do
  use Ecto.Migration

  def change do
    create table(:addresses_accounts, primary_key: true) do      
      add(:address_id, references(:addressbook))
      add(:account_id, references(:accounts))
    end
    
    create index(:addresses_accounts, [:address_id, :account_id])
  end
end