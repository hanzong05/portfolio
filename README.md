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
        return -- invalid seed, ignore
    end
    -- Add seed to player's inventory safely here
    print(player.Name .. " got seed: " .. seedName)
end)
