defmodule BraccoPubSub.Repo.Migrations.AddAccountCompanyIdField do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add(:company_id, references(:companies))
    end
  end
end
