defmodule BraccoPubSub.Repo.Migrations.AlterTicketsParentid do
  use Ecto.Migration

  def change do
    alter table(:tickets) do
      remove :parent_id
    end
  end
end
