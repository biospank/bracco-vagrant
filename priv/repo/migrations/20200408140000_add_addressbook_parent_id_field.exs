defmodule BraccoPubSub.Repo.Migrations.AddAddressbookParentIdField do
  use Ecto.Migration

  def change do
    alter table(:addressbook) do
      add(:parent_id, :integer)
    end
  end
end
