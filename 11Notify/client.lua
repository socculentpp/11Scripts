
RegisterNetEvent('myNotify:send')
AddEventHandler('myNotify:send', function(text, duration, type)
    -- Default to 'info' type if not provided
    local notifyType = type or 'info'

 
    SendNUIMessage({
        action = 'notify',
        text = text,
        duration = duration or 5000,
        type = notifyType -- Add the 'type' parameter here
    })
end)


exports('sendNotification', function(text, duration, type)
    
    TriggerEvent('myNotify:send', text, duration, type)
end)


RegisterCommand('testnotify', function()
   
    TriggerEvent('myNotify:send', 'This works!', 3000, 'success')
end, false)


RegisterCommand('testnotifyerror', function()
   
    TriggerEvent('myNotify:send', 'This also works, but in red!', 3000, 'error')
end, false)

RegisterCommand('testnotifyinfo', function()
    
    TriggerEvent('myNotify:send', 'This also works, but in blue!', 3000, 'info')
end, false)
