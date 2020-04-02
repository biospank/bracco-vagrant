defmodule BraccoPubSub.Repo.Migrations.CreateCompanies do
  use Ecto.Migration

  def change do
    create table(:companies) do
      add(:name, :string)
      add(:email, :string)
      add(:mobilephone, :string)
      add(:active, :boolean, default: false)
    end
  end
end
