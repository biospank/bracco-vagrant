defmodule BraccoPubSub.Repo.Migrations.CreateChatMessages do
  use Ecto.Migration

  def change do
    create table(:chatmessages) do
      add(:chat_id, :integer)    
      add(:sender_id, :integer, references(:accounts))
      add(:recipients_id, {:array, :integer}, default: [])
      add(:created_at, :timestamp, default: fragment("now()"))
      add(:message, :text)   
      add(:read_by, {:array, :integer}, default: [])     
      add(:delivered, {:array, :integer}, default: [])         
    end

    create index(:chat, [:sender_id])    
    create index(:chat, [:chat_id])
  end
end
