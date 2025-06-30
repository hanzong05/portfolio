-- List of rare seeds that could be spawned
local rareSeeds = {"Dragon Pepper", "Moon Blossom", "Candy Blossom"}

-- Function to spawn a seed at a specific location
local function spawnSeed(seedName, spawnPosition)
    local seed = Instance.new("Part")
    seed.Name = seedName
    seed.Size = Vector3.new(2, 2, 2)
    seed.Position = spawnPosition
    seed.Anchored = true
    seed.Parent = workspace
    print("Spawned seed: " .. seedName)
end

-- Simulate seed spawning every 30 seconds at a fixed location
while true do
    wait(30)
    local randomSeed = rareSeeds[math.random(1, #rareSeeds)]
    local spawnLocation = Vector3.new(0, 5, 0)  -- example position
    spawnSeed(randomSeed, spawnLocation)
end
