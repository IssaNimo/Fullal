# Generated by Django 4.0.3 on 2022-11-21 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0015_studentpadcollectiondetails_regno_subcounty_regno'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentregistrationdetails',
            name='regno',
            field=models.CharField(default=11111111, max_length=50, verbose_name='Student Registrartion Number'),
            preserve_default=False,
        ),
    ]
