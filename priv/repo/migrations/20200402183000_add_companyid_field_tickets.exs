defmodule BraccoPubSub.Repo.Migrations.AddCompanyIdFieldTickets do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      add(:company_id, references(:companies))
    end
  end
end
