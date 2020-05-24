defmodule BraccoPubSub.Repo.Migrations.AddNotesCompanyIdField do
  use Ecto.Migration

  def change do
    alter table(:notes) do
      add(:company_id, references(:companies))
    end
  end
end
