-- This example assumes the player has an inventory table in their Player object or server script
-- It adds a seed entry directly to that inventory list.

local Players = game:GetService("Players")

-- Simulate a function that adds seed to a player's inventory
local function AddSeedToPlayer(player, seedName)
    -- Fake inventory table stored in player attribute (for example)
    if not player:FindFirstChild("Inventory") then
        local inv = Instance.new("Folder")
        inv.Name = "Inventory"
        inv.Parent = player
    end

    local inventory = player:FindFirstChild("Inventory")

    -- Add the seed as a StringValue to the Inventory folder
    local seedItem = Instance.new("StringValue")
    seedItem.Name = seedName
    seedItem.Parent = inventory

    print("Added seed " .. seedName .. " to " .. player.Name .. "'s bag")
end

-- Example usage: Add a seed to all players every 60 seconds (just for demo)
while true do
    wait(60)
    for _, player in pairs(Players:GetPlayers()) do
        AddSeedToPlayer(player, "Dragon Pepper")
    end
end
