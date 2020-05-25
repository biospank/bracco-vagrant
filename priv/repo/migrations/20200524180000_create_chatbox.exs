defmodule BraccoPubSub.Repo.Migrations.CreateChatbox do
  use Ecto.Migration

  def change do
    create table(:chatbox) do
      add(:identification, :integer)
      add(:open, :boolean, default: true)
    end

    create index(:chat, [:identification])
  end
end
