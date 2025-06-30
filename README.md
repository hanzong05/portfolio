local TeleportService = game:GetService("TeleportService")
local DataStoreService = game:GetService("DataStoreService")
local OldServerStore = DataStoreService:GetDataStore("OldServerJobIds")
local PLACE_ID = game.PlaceId

local function teleportToOldServer(player)
    local jobId = OldServerStore:GetAsync("latest_old_jobid")
    if jobId then
        TeleportService:TeleportToPlaceInstance(PLACE_ID, jobId, player)
    else
        warn("No old server id found.")
    end
end

game.Players.PlayerAdded:Connect(teleportToOldServer)
