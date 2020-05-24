defmodule BraccoPubSub.Repo.Migrations.AddDocumentsCompanyIdField do
  use Ecto.Migration

  def change do
    alter table(:documents) do
      add(:company_id, references(:companies))
    end
  end
end
