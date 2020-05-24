defmodule BraccoPubSub.Repo.Migrations.AddAddressbookCompanyIdField do
  use Ecto.Migration

  def change do
    alter table(:addressbook) do
      add(:company_id, references(:companies))
    end
  end
end
