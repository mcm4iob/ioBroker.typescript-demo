/*
 * Created with @iobroker/create-adapter v2.6.5
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
/* OLD import * as utils from '@iobroker/adapter-core'; */

import { Adapter, type AdapterOptions } from '@iobroker/adapter-core';

export class TypescriptDemo extends Adapter {

    public constructor(options: Partial<AdapterOptions> = {}) {
        super({
            ...options,
            name: 'typescript-demo',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    private async onReady(): Promise<void> {
        // Initialize your adapter here

        // Reset the connection indicator during startup
        this.setState('info.connection', false, true);

    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     */
    private onUnload(callback: () => void): void {
        try {
            callback();
        } catch (e) {
            callback();
        }
    }

    /**
     * This methos shall be piblic so that one can use it outside
     */
    public myPublicCode( text:string) : void {
        this.log.info(`[myPubicCode] got ${text}`);
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    module.exports = (options: Partial<AdapterOptions> | undefined) => new TypescriptDemo(options);
} else {
    // otherwise start the instance directly
    (() => new TypescriptDemo())();
}