defmodule BraccoPubSub.Repo.Migrations.AlterAccountsParentid do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      remove :parent_id
    end
  end
end
