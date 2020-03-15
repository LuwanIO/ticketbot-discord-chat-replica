/*
 * Small microservice to generate a Discord-like chat section
 * Copyright (C) 2020 Bowser65
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import './elements/ThemeSwitch'
import './elements/DiscordMessages'
import './elements/DiscordMessage'
import './elements/MessageHeader'
import './elements/MessageAvatar'
import './elements/MessageDate'
import './elements/MessageMarkup'
import './elements/MessageEmoji'
import './elements/MessageMention'
import './elements/MessageSpoiler'
import './elements/MessageCodeblock'
import './elements/MessageImage'
import './elements/MessageVideo'
import './elements/MessageAttachment'
import './elements/DiscordInvite'
import { copy, contextMenu } from './utils'

// Context menus
window.addEventListener('contextmenu', e => {
  e.preventDefault()
  // Remove any previous context menu
  const el = document.querySelector('.context-menu')
  if (el) el.remove()
})

document.querySelectorAll('img[data-clickable], message-markup a, .embed a').forEach(link => {
  contextMenu(link, [
    {
      name: 'Copy Link',
      callback: () => copy(link.src || link.href)
    },
    {
      name: 'Open Link',
      callback: () => open(link.src || link.href)
    }
  ])
})

// User Agents
if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
  document.body.classList.add('firefox')
}

if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1) {
  document.body.classList.add('chrome')
}
