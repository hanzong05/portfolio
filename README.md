local Players = game:GetService("Players")
local player = Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")

-- Create ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "SeedSpawnerUI"
screenGui.Parent = playerGui

-- Create Frame
local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 200, 0, 150)
frame.Position = UDim2.new(0.5, -100, 0.5, -75)
frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
frame.Parent = screenGui

-- Title Label
local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, 0, 0, 30)
title.BackgroundColor3 = Color3.fromRGB(50, 50, 50)
title.Text = "Seed Spawner"
title.TextColor3 = Color3.new(1,1,1)
title.Parent = frame

-- Dropdown (Simple List)
local seeds = {"Dragon Pepper", "Moon Blossom", "Candy Blossom"}
local selectedSeed = seeds[1]

local seedLabel = Instance.new("TextLabel")
seedLabel.Text = "Selected Seed: "..selectedSeed
seedLabel.Size = UDim2.new(1, 0, 0, 30)
seedLabel.Position = UDim2.new(0, 0, 0, 40)
seedLabel.TextColor3 = Color3.new(1,1,1)
seedLabel.BackgroundTransparency = 1
seedLabel.Parent = frame

-- Buttons for seed selection
for i, seedName in ipairs(seeds) do
    local button = Instance.new("TextButton")
    button.Size = UDim2.new(1, 0, 0, 25)
    button.Position = UDim2.new(0, 0, 0, 40 + 30 * i)
    button.Text = seedName
    button.BackgroundColor3 = Color3.fromRGB(70, 70, 70)
    button.TextColor3 = Color3.new(1,1,1)
    button.Parent = frame

    button.MouseButton1Click:Connect(function()
        selectedSeed = seedName
        seedLabel.Text = "Selected Seed: "..selectedSeed
    end)
end

-- Spawn Button
local spawnButton = Instance.new("TextButton")
spawnButton.Size = UDim2.new(1, 0, 0, 30)
spawnButton.Position = UDim2.new(0, 0, 1, -30)
spawnButton.Text = "Spawn Seed"
spawnButton.BackgroundColor3 = Color3.fromRGB(0, 170, 0)
spawnButton.TextColor3 = Color3.new(1,1,1)
spawnButton.Parent = frame

-- Function to spawn a seed (on the server)
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local spawnSeedEvent = ReplicatedStorage:FindFirstChild("SpawnSeedEvent")
if not spawnSeedEvent then
    spawnSeedEvent = Instance.new("RemoteEvent")
    spawnSeedEvent.Name = "SpawnSeedEvent"
    spawnSeedEvent.Parent = ReplicatedStorage
end

spawnButton.MouseButton1Click:Connect(function()
    spawnSeedEvent:FireServer(selectedSeed)
end)
