local Players = game:GetService("Players")

local function AddSeedToPlayer(player, seedName)
    if not player:FindFirstChild("Inventory") then
        local inv = Instance.new("Folder")
        inv.Name = "Inventory"
        inv.Parent = player
    end

    local inventory = player:FindFirstChild("Inventory")
    local seedItem = Instance.new("StringValue")
    seedItem.Name = seedName
    seedItem.Parent = inventory
end

while true do
    wait(60)
    for _, player in pairs(Players:GetPlayers()) do
        AddSeedToPlayer(player, "Dragon Pepper")
    end
end
