// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

MBDMachineEvents.onTick('', context => {
    let event = context.getEvent()
    let machine = event.machine
    let hanlder = machine.getCapability(CapabilityBuilder.ITEM).resolve().get()
})


