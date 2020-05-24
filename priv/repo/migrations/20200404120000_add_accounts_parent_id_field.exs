defmodule BraccoPubSub.Repo.Migrations.AddAccountsParentIdField do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add(:parent_id, :integer)
    end
  end
end
