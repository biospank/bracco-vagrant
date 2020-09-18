defmodule BraccoPubSub.Repo.Migrations.AddSprintCompanyFields do
  use Ecto.Migration

  def change do
    alter table(:sprint) do
      add(:company_id, references(:companies))
      add(:parent_id, references(:accounts))      
    end

    create index(:sprint, [:company_id])
    create index(:sprint, [:parent_id])
  end
end
