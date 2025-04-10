# 11Scripts


To replace the default ESX.ShowNotification

function ESX.ShowNotification(msg, notifyType, length)
    local validTypes = {error = true, success = true, info = true}
    local notificationType = validTypes[notifyType] and notifyType or 'info'
    local duration = 5000
    if length then
        duration = length * 1000
    end
    TriggerEvent('myNotify:send', msg, duration, notificationType)
end

---------------------------------------------------------------------------------------------------------
Exports
exports['11Notify']:sendNotification( message , duration, type)
