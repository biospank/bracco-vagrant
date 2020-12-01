defmodule BraccoPubSub.Repo.Migrations.AlterAddressbookParentid do
  use Ecto.Migration

  def change do
    alter table(:addressbook) do
      remove :parent_id
    end
  end
end
