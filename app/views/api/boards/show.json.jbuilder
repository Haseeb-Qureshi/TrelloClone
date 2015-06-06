json.(@board, :title, :user_id, :id)

json.members @board.members do |json, member|
  json.(member, :email, :id)
end

json.lists @board.lists do |list|
  json.(list, :title, :ord, :id)
  json.cards list.cards do |card|
    json.(card, :title, :list_id, :description, :ord, :id)
  end
end
