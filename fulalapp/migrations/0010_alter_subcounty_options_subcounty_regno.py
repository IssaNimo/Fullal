# Generated by Django 4.0.3 on 2022-11-21 10:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0009_subcounty'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='subcounty',
            options={'verbose_name_plural': 'Sub County'},
        ),
        migrations.AddField(
            model_name='subcounty',
            name='regno',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='sub_county', to='fulalapp.studentregistrationdetails', verbose_name='Student ID'),
            preserve_default=False,
        ),
    ]
