# Generated by Django 4.0.3 on 2022-11-22 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0018_subcounty_regno'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subcounty',
            name='regno',
        ),
    ]
