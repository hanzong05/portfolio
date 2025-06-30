local ReplicatedStorage = game:GetService("ReplicatedStorage")
local AddSeedEvent = Instance.new("RemoteEvent", ReplicatedStorage)
AddSeedEvent.Name = "AddSeedEvent"

local allowedSeeds = {
    ["Dragon Pepper"] = true,
    ["Moon Blossom"] = true,
    ["Candy Blossom"] = true,
}

AddSeedEvent.OnServerEvent:Connect(function(player, seedName)
    if not allowedSeeds[seedName] then
        return
    end

    local inventory = player:FindFirstChild("Inventory")
    if not inventory then
        inventory = Instance.new("Folder")
        inventory.Name = "Inventory"
        inventory.Parent = player
    end

    local seed = Instance.new("StringValue")
    seed.Name = seedName
    seed.Parent = inventory

    print(player.Name .. " received seed: " .. seedName)
end)
