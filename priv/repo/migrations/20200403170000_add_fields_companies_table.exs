defmodule BraccoPubSub.Repo.Migrations.AddFieldsOnCompanies do
  use Ecto.Migration

  def change do
    alter table(:companies) do
      add(:fiscalcode, :string)
      add(:vat_number, :string)
      add(:address, :string)
    end
  end
end
