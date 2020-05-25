defmodule BraccoPubSub.Repo.Migrations.CreateChatbox do
  use Ecto.Migration

  def change do
    create table(:chatbox) do
      add(:sender, :integer, references(:accounts))
      add(:recipient, {:array, :integer}, default: [])
      add(:created_at, :timestamp, default: fragment("now()"))
      add(:message, :text)   
      add(:read_by, {:array, :integer}, default: [])     
      add(:delivered, {:array, :integer}, default: []) 
    end

    create index(:chat, [:sender])
    create index(:chat, [:recipient])
  end
end
