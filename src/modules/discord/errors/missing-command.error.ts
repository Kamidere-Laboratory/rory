export class MissingCommandError extends Error {
  constructor(messageContent: string) {
    super(`Command missing in "${messageContent}"`);
  }
}
