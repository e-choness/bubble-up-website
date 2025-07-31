---
layout: page
title: Announcements
permalink: /announcements/
---

<div class="announcements-archive">
    <div class="announcements-grid">
        {% for announcement in site.announcements %}
            <article class="announcement-card">
                {% if announcement.image %}
                    <div class="announcement-image">
                        <img src="{{ announcement.image | relative_url }}" 
                             alt="{{ announcement.title }}"
                             loading="lazy">
                    </div>
                {% endif %}
                
                <div class="announcement-content">
                    <h3 class="announcement-title">
                        <a href="{{ announcement.url | relative_url }}">
                            {{ announcement.title }}
                        </a>
                    </h3>
                    
                    <p class="announcement-excerpt">
                        {{ announcement.excerpt | strip_html | truncate: 120 }}
                    </p>
                    
                    <div class="announcement-meta">
                        <time datetime="{{ announcement.date | date_to_xmlschema }}">
                            {{ announcement.date | date: "%B %d, %Y" }}
                        </time>
                    </div>
                </div>
            </article>
        {% endfor %}
    </div>
</div>