json.(@board, :title, :user_id, :id)

json.members @board.members do |json, member|
  json.(member, :email, :id)
end

json.lists @board.lists do |json, list|
  json.(list, :title, :ord)
  json.cards list.cards do |json, card|
    json.(card, :title, :list_id, :description, :ord)
  end
end
