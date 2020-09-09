defmodule BraccoPubSub.Repo.Migrations.AddChatsOpenField do
  use Ecto.Migration

  def change do
    alter table(:chats) do
      add(:open, :boolean)
    end
  end
end
